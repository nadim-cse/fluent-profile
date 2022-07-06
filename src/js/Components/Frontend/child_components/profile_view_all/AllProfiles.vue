<template>

    <el-container>
      <el-main>
        <el-row :gutter="6">
               <span style="float:right">
                  <el-select v-model="filterValue" placeholder="Select">
                     <el-option
                         v-for="item in filterOptions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                     </el-option>
                  </el-select>
                  <el-select v-model="filterActionValue" placeholder="Select">
                     <el-option
                         v-for="item in filterActions"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value">
                     </el-option>
                  </el-select>
                  <el-button type="danger" @click="FilterData">Filter</el-button>
               </span>
          <el-table v-loading="loading" :data="donors" stripe>
            <el-table-column label="Donation Amount" width="220">
              <template slot-scope="scope">
                        <span
                            v-if="scope.row.payment_total"
                            class="ff_payment_badge"
                        >{{ formatMoney( scope.row ) }} {{ scope.row.currency }}</span
                        >
              </template>
            </el-table-column>
            <el-table-column label="Donor name" width="180">
              <template slot-scope="scope">
                {{ scope.row.payer_name }}
              </template>
            </el-table-column>
            <el-table-column
                label="Payment Method"
                prop="payment_method"
                width="140"
            ></el-table-column>
            <el-table-column
                label="Currency"
                prop="currency"
                width="140"
            ></el-table-column>
            <el-table-column label="Date" width="150">
              <template slot-scope="scope">
                {{ scope.row.donation_date }}
              </template>
            </el-table-column>
            <el-table-column label="" width="300">
              <template slot-scope="scope">
                <el-button
                    plain
                    type="primary"
                    @click="shareDonorProfile(scope.row.id)"
                ><i class="el-icon-view"></i
                ></el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pull-right ff_paginate">
            <el-pagination
                :current-page.sync="paginate.current_page"
                :page-size="parseInt(paginate.per_page)"
                :page-sizes="[1, 5, 10, 50, 100]"
                :total="paginate.total"
                layout="total, sizes, prev, pager, next, jumper"
                @size-change="handleSizeChange"
                @current-change="goToPage"
            >
            </el-pagination>
          </div>
        </el-row>
      </el-main>
    </el-container>

</template>
<script>


export default {
  name: "AllProfilesComponent",
  props: {
    donor_type: {
      type: String
    }
  },


  data() {
    return {
      payments: [],
      loading: false,
      activeName: this.donor_type,
      donors: [],
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10,
      },
      SortType: 'ascending',
      filterOptions: [
        {
          "label" : "Donation Amount",
          "value" : "payment_total"
        },
        {
          "label" : "Date",
          "value" : "created_at"
        },
      ],
      filterValue: null,
      filterActions: [
        {
          "label" : "Ascending",
          "value" : "asc"
        },
        {
          "label" : "Descending",
          "value" : "desc"
        },
      ],
      filterActionValue: null,

    };
  },
  methods: {

    getDonors() {
      this.loading = true;
      let sortType = this.SortType;

      this.$adminGet( {
        route: "get_donors",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        page: this.paginate.current_page,
        per_page: this.paginate.per_page,
        donor_type: this.activeName,
        afValue: this.filterValue,
        afActions: this.filterActionValue,
      } )
          .then( (response) => {
            this.donors = response.data.donors;
            this.paginate.total = response.data.total;
            this.paginate.last_page = response.data.last_page;
            this.loading = false;
          } )
          .fail( (error) => {
            console.log( error );
            // this.$showAjaxError(error);
          } );

    },
    formatMoney(row) {
      let amount = row.payment_total / 100;
      if (parseFloat( amount ) % 1) {
        amount = parseFloat( amount ).toFixed( 2 );
      }
      return amount;

    },

    shareDonorProfile(id) {
      if (!id) {
        return;
      }
      location.href= window.location+"/?donor_id="+ id;

    },

    viewDonorProfile(id) {
      if (!id) {
        return;
      }
      this.singleDonorId = id;
      this.singleDonorDonationVisible = true;

    },
    goToPage(value) {
      this.paginate.current_page = value;
      this.getDonors();
    },
    handleSizeChange(val) {
      this.paginate.per_page = val;
      this.getDonors();
    },
    totalDonationCalc(data) {
      let totalDontion = 0;
      for (let i = 0; i < data.length; i++) {
        totalDontion =
            totalDontion + parseFloat( data[i].payment_total ).toFixed( 2 ) / 100;
      }
      return parseFloat( totalDontion ).toFixed( 2 );
    },
    FilterData() {
      if (this.filterValue == null || this.filterActionValue == null) {
        return;
      }
      this.getDonors( this.filterValue, this.filterActionValue );
    },
    clearFilter() {
      console.log( "cleared" )
    }
  },
  mounted() {
    this.getDonors(this.donor_type);
  },
};
</script>
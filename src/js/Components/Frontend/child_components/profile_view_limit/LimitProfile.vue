<template>
  <div>
    <el-container>
      <el-main>
        <el-row :gutter="12">
          <el-table v-loading="loading" :data="donors" stripe>
            <el-table-column label="Donation Amount" width="220">
              <template slot-scope="scope">
                        <span
                            v-if="scope.row.total_donation"
                            class="ff_payment_badge"
                        >{{ formatMoneyTopTen( scope.row ) }}</span
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
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "LimitProfileComponent",
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

    };
  },
  methods: {
    getDonors() {
      this.loading = true;
      this.$adminGet( {
        route: "get_donors",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        page: null,
        per_page: null,
        donor_type: this.donor_type,
        afValue: null,
        afActions: null,
      } )
          .then( (response) => {
            this.donors = response.data.donors;
            this.loading = false;
          } )
          .fail( (error) => {
            console.log( error );
            // this.$showAjaxError(error);
          } );
    },

    formatMoneyTopTen(row) {
      let amount = row.total_donation / 100;
      if (parseFloat( amount ) % 1) {
        amount = parseFloat( amount ).toFixed( 2 );
      }
      return amount + " " + row.currency;
    },

    shareDonorProfile(id) {
      if (!id) {
        return;
      }
      location.href= window.location+"/?donor_id="+ id;
      //this.$router.push( {query: { donor_id: id} })

    },

    totalDonationCalc(data) {
      let totalDontion = 0;
      for (let i = 0; i < data.length; i++) {
        totalDontion =
            totalDontion + parseFloat( data[i].payment_total ).toFixed( 2 ) / 100;
      }
      return parseFloat( totalDontion ).toFixed( 2 );
    },

  },
  mounted() {
    this.getDonors( this.donor_type );
  },
};
</script>


<template>
  <div>
    <div class="fd-profile-header">
      <div class="title">
        <h3> {{ headerTitle }}</h3>
      </div>
      <div class="fd-profile-action">
        <div class="fd-search">
          Short code:
          <el-tooltip
              effect="dark"
              content="Click to copy shortcode"
              title="Click to copy shortcode"
              placement="top"
          >
            <code
                class="shortcode"
                data-clipboard-text="[fluent_donation_profile]"
            >
              <i class="el-icon-document"></i> [fluent_donation_profile]
            </code>
          </el-tooltip>
        </div>
      </div>
    </div>
    <el-container>
      <el-main>
        <el-row :gutter="12">
          <el-table v-loading="loading" stripe :data="payments">
            <el-table-column width="220" label="Submission ID">
              <template slot-scope="scope">
                <a class="payment_sub_url" :href="scope.row.entry_url">
                  #{{ scope.row.submission_id }}
                </a>
                <span class="ff_payment_badge" v-if="scope.row.payment_total">{{
                    formatMoney(scope.row)
                  }}</span>
              </template>
            </el-table-column>
<!--            <el-table-column label="Form" prop="title"></el-table-column>-->
            <el-table-column label="Donor name"  width="180">
              <template slot-scope="scope">
                {{ scope.row.payer_name }}
              </template>
            </el-table-column>
            <el-table-column
                label="Payment Method"
                prop="payment_method"
                width="140"
            ></el-table-column>
            <el-table-column label="Currency" prop="currency" width="140"></el-table-column>
            <el-table-column label="Status" width="140">
              <template slot-scope="scope1">
                <span
                    v-if="scope1.row.status == 'paid'"
                    style="
                    color: white;
                    background: green;
                    padding: 10px;
                    border-radius: 13px;
                    font-weight: bold;
                    text-transform: capitalize;
                  "
                >
                  {{ scope1.row.status }}
                </span>
                <span
                    v-if="scope1.row.status == 'pending'"
                    style="
                    color: black;
                    background: yellow;
                    padding: 10px;
                    border-radius: 13px;
                    font-weight: bold;
                    text-transform: capitalize;
                  "
                >
                  {{ scope1.row.status }}
                </span>
              </template>
            </el-table-column>

            <el-table-column label="Date" width="150">
              <template slot-scope="scope">
                {{ scope.row.human_date }} {{ "ago" }}
              </template>
            </el-table-column>
<!--            <el-table-column label="" width="150">-->
<!--              <template slot-scope="scope3">-->
<!--                <el-dropdown size="medium" split-button type="primary">-->
<!--                  Action-->
<!--                  <el-dropdown-menu slot="dropdown">-->
<!--                    <el-dropdown-item>Action 1</el-dropdown-item>-->
<!--                    <el-dropdown-item>Action 2</el-dropdown-item>-->
<!--                    <el-dropdown-item>Action 3</el-dropdown-item>-->
<!--                    <el-dropdown-item>Action 4</el-dropdown-item>-->
<!--                  </el-dropdown-menu>-->
<!--                </el-dropdown>-->
<!--              </template>-->
<!--            </el-table-column>-->
          </el-table>

          <div class="pull-right ff_paginate">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="goToPage"
                :current-page.sync="paginate.current_page"
                :page-sizes="[1, 5, 10, 50, 100]"
                :page-size="parseInt(paginate.per_page)"
                layout="total, sizes, prev, pager, next, jumper"
                :total="paginate.total"
            >
            </el-pagination>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Donationlist",
  data() {
    return {
      payments: [],
      loading: false,
      id: this.$route.params.id,
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10,
      },
      headerTitle: ''
    };
  },
  methods: {
    getPayment() {
      this.loading = true;
      this.$adminGet({
        route: "get_payment_list",
        form_id: this.id,
        page: this.paginate.current_page,
        per_page: this.paginate.per_page,
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
      })
          .then((response) => {
            this.payments = response.data.payments;
            this.paginate.total = response.data.total;
            this.paginate.last_page = response.data.last_page;
            this.loading = false;
            this.headerTitle = response.data.payments[0].title;
          })
          .fail((error) => {
            console.log(error);
            // this.$showAjaxError(error);
          });
    },
    goToPage(value) {
      this.paginate.current_page = value;
      this.getPayment();
    },
    handleSizeChange(val) {
      this.paginate.per_page = val;
      this.getPayment();
    },
    formatMoney(row) {
      let amount = row.payment_total / 100;
      if (parseFloat(amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }
      return amount + " " + row.currency;
    },
  },
  mounted() {
    this.getPayment();
  },
};
</script>
<style scoped>
.ff_paginate {
  text-align: right;
  margin-top: 10px;
}
.el-main {
  padding: 15px 8px 12px 2px !important;
}

.fd-profile-header {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  width: auto;
  border-bottom: 1px solid #e3e8ee;
  clear: both;
  overflow: hidden;
  padding: 5px 15px;
  background-color: #f7fafc;
  font-weight: bold;
  color: #697386;
}

.fd-profile-action {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fd-search {
  margin-right: 10px;
}

.fd-pagination {
  text-align: right;
  margin-top: 20px;
}

.allposts-wraper {
  margin: 0 20px 0 0;
}

.shortcode {
  cursor: context-menu;
}

.el-button,
a {
  text-decoration: none;
}
</style>

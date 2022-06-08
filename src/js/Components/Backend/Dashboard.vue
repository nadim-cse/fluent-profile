<template>
  <div>
    <div class="fd-profile-header">
      <div class="title">
        <h3>All Donations</h3>
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
        <el-row :gutter="12" v-loading="loading">
          <el-col :span="8" v-for="(item, index) in payments" :key="index"
                  :style="payments.length > 2 ? 'margin-top:10px' : ''">
            <el-card shadow="always">
              <h2>{{ item.title }}</h2>
              <p>
                Total amount:
                {{ (Math.round(item.total_amount * 100) / 100).toFixed(2) }}
              </p>
              <div style="float: right; margin-bottom: 1rem">
                <el-button
                    type="primary"
                    icon="el-icon-view"
                    @click="showFormData(item.form_id)"
                    size="mini"
                ></el-button>
                <el-button type="primary" icon="el-icon-share" size="mini"></el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Clipboard from "clipboard";
export default {
  name: "Dashboard",
  data() {
    return {
      payments: [],
      loading: false,
    };
  },
  methods: {
    getPayment() {
      this.loading = true;
      this.$adminGet({
        route: "get_payment",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
      })
          .then((response) => {
            this.payments = response.data.payments;
            this.loading = false;
             
          })
          .fail((error) => {
            console.log(error);
            // this.$showAjaxError(error);
          });
    },
    showFormData(id) {
      this.$router.push({
        name: "donation_list",
        params: {id: id},
      });
    },
  },
  mounted() {
    this.getPayment();
    let clipboard = new Clipboard(".shortcode");
    clipboard.on("success", (e) => {
      this.$message({
        message: "Copied to clipboard!",
        type: "success"
      })
    })
  },
};
</script>
<style scoped>
.el-main{
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


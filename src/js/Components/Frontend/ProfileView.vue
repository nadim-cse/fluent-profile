<template>

    <div class="crud-project-header">

      <el-row>

          <template>
            <el-row style="width: 100%">
              <el-skeleton :rows="3" :loading="loading" animated>
                <el-card class="box-card">
                  <div slot="header" class="clearfix">

                    <el-row :gutter="24">
                      <el-col :span="12"><div class="grid-content bg-purple">
                        Donor Name:
                        <span v-if="singleDonorData.length > 0">{{
                            singleDonorData[0].payer_name
                          }}
                        </span>
                      </div></el-col>
                      <el-col :span="12"><div class="grid-content bg-purple">
                        <div class="codetheme-social-share" style="text-align: end">
                          Share this profile:
                          <ul>
                            <li><a v-if="singleDonorData.length > 0" rel="nofollow noopener" target="_blank" title="Share by Facebook" :href="'https://www.facebook.com/sharer/sharer.php?u=' + siteUrl"><i class="icofont icofont-facebook"></i></a></li>
                            <li><a v-if="singleDonorData.length > 0" rel="nofollow noopener" target="_blank" title="Share by Twitter" :href="'https://twitter.com/intent/tweet?text=One of the top donors: '+singleDonorData[0].payer_name+'&amp;url='+ siteUrl"> <i class="icofont-twitter"></i></a></li>
                            <li><a v-if="singleDonorData.length > 0" rel="nofollow noopener" target="_blank" title="Share by Linkedin" :href="'https://www.linkedin.com/shareArticle?mini=true&amp;url=' + siteUrl + '&amp;summary=One of the top donors: '+singleDonorData[0].payer_name"> <i class="icofont-linkedin"></i></a></li>
                            <!--<li><a rel="nofollow noopener" target="_blank" title="Share by Whatsapp" href="https://api.whatsapp.com/send?text=<?php sanitize_title(the_title()); ?> <?php echo get_permalink(); ?>" <i class="icofont-whatsapp"></i></a></li>-->
                            <!--<li><a rel="nofollow noopener" target="_blank" title="Share by Email" href="mailto:?subject=<?php sanitize_title(the_title()); ?>&body=Check out this site: <?php echo get_permalink(); ?>"  <i class="icofont-email"></i></a></li>-->
                            <!--<li><a rel="nofollow noopener" target="_blank" title="Share by Pinterest" href="http://pinterest.com/pin/create/link/?url=<?php echo get_permalink(); ?>&description=<?php sanitize_title(the_title()); ?>" <i class="icofont-pinterest"></i></a></li>-->
                            <!--<li><a rel="nofollow noopener" target="_blank" title="Share by Telegram" href="https://telegram.me/share/url?url=<?php echo get_permalink(); ?>&text=<?php sanitize_title(the_title()); ?>" <i class="icofont-telegram"></i></a></li>-->
                          </ul>
                        </div>
                      </div></el-col>
                    </el-row>
                  </div>
                  <div class="text item">
                    <h4>
                      Total Donation: {{ totalDonationCalc(singleDonorData) }}
                    </h4>
                  </div>

                  <el-table :data="singleDonorData" v-loading="loading">
                    <el-table-column label="Donation Amount" width="150">
                      <template slot-scope="scope">
                        <span
                            class="ff_payment_badge"
                            v-if="scope.row.payment_total"
                        >{{ formatMoney(scope.row) }}</span
                        >
                      </template>
                    </el-table-column>
                    <el-table-column
                        property="donation_date"
                        label="Donation date"
                        width="200"
                    ></el-table-column>
                  </el-table>
                </el-card>
              </el-skeleton>
            </el-row>
          </template>

      </el-row>

    </div>

</template>
<script>
export default {
  name: "ProfileView",
  data() {
    return {
      donorId: this.$route.query.donor_id,
      singleDonorData: [],
      loading: false,
      siteUrl: FluentProfileAdmin.current_url+ '?donor_id='+ this.$route.query.donor_id,
    }
  },
  watch:{
    "$route.query.donor_id"(value) {
       if(value) {
         // window.location.reload()
         alert(value)
       }
      }
  },
  mounted() {
    this.getSingleDonor();
  },
  methods: {
    getSingleDonor() {
      if (!this.donorId) {
        return;
      }
      this.loading = true;
      this.$adminGet({
        route: "get_single_donor_t",
        _wpnonce: FluentProfileAdmin.fluent_profile_admin_nonce,
        trxId: this.donorId,
      })
          .then((response) => {
            this.singleDonorData = response.data.donor;
            this.loading = false;
          })
          .fail((error) => {
            console.log(error);
            // this.$showAjaxError(error);
          });
    },
    formatMoney(row) {
      let amount = row.payment_total / 100;
      if (parseFloat( amount) % 1) {
        amount = parseFloat(amount).toFixed(2);
      }
      return amount + " " + row.currency;
    },
    totalDonationCalc(data) {
      let totalDontion = 0;
      for (let i = 0; i < data.length; i++) {
        totalDontion =
            totalDontion + parseFloat(data[i].payment_total).toFixed(2) / 100;
      }
      return parseFloat(totalDontion).toFixed(2);
    },
  },
};
</script>


<template>

    <span v-if="!singleDonorView">
      <div class="fd-profile-header">
        <div class="title">
          <h3>Fluent Donation Profiles</h3>
        </div>
      </div>
      <el-container>
        <el-row>
          <template>
          <el-tabs v-model="activeName" @tab-click="changeTab" type="border-card">
            <el-tab-pane label="All Donors" name="all_donnors">
              <all-profiles :donor_type=activeName v-if="donorType == 'all_donnors'"></all-profiles>
            </el-tab-pane>
            <el-tab-pane label="Top 10 Donors" name="top_10_donors">
              <limit-profile :donor_type=activeName v-if="donorType == 'top_10_donors'"></limit-profile>
            </el-tab-pane>
          </el-tabs>
        </template>
        </el-row>
      </el-container>
    </span>
    <span v-else>
        <profile-view></profile-view>
    </span>

</template>
<script>
import AllProfiles from "./child_components/profile_view_all/AllProfiles";
import LimitProfile from "./child_components/profile_view_limit/LimitProfile";
import ProfileView from "./ProfileView";

export default {
  name: "Dashboard",
  data() {
    return {
      payments: [],
      loading: false,
      activeName: "all_donnors",
      donors: [],
      paginate: {
        total: 0,
        current_page: 1,
        last_page: 1,
        per_page: 10,
      },
      donorType: "all_donnors",
      singleDonorData: [],
      singleDonorDonationVisible: false,
      singleDonorLoading: false,
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
      singleDonorView: false
    };
  },
  components:{
    ProfileView,
    AllProfiles, LimitProfile
  },
  watch:{
    "$route.query.donor_id"(value) {
      if(!value){
        window.location.reload()
      }

    }
  },
  methods: {

    changeTab() {
      if (this.activeName == "all_donnors") {
        this.donorType = "all_donnors";

      }
      if (this.activeName == "top_10_donors") {
        this.donorType = "top_10_donors";

      }
    },
    singleViewLoad(){
      if(this.$route.query.donor_id){

        this.singleDonorView = true;
      }
    }

  },
  mounted() {
    this.singleViewLoad();

  }

};
</script>


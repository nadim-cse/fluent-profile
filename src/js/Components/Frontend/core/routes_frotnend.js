/**
 * Register all vue routes (frontend)
 */

import ProfileViewSingle from "../ProfileView.vue";
import ViewProfileFrontendAll from "../ProfileViewAll.vue";

export const routes = [

  {
    path: "*",
    name: "profile_view_all",
    component: ViewProfileFrontendAll,
  },
  // {
  //   path: "/donor/:donor_id",
  //   name: "donor",
  //   component: ProfileViewSingle,
  // },
];

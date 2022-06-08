/**
 * Register all vue routes (backend)
 */


import DonationForms from "../Dashboard";
import DonationList from "../DonationList";


export const routes = [

  {
    path: "/",
    name: "donation_forms",
    component: DonationForms,
    meta: {
      title: "Home - Fluent Donation Profile"

    },
  },
  
  {
    path: "/donation_list/:id",
    name: "donation_list",
    component: DonationList,
    meta: { title: "Donation List - Fluent Profile" },
  },


];

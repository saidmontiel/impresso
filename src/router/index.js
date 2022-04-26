import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "@/views/ProductView.vue";
import NeedHelp from "@/views/NeedHelp.vue";
import MyAccount from "@/views/MyAccount.vue";
import ShoppingCart from "@/views/ShoppingCart.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product",
    name: "product",
    component: ProductView,
  },
  {
    path: "/ayuda",
    name: "ayuda",
    component: NeedHelp,
  },
  {
    path: "/cuenta",
    name: "cuenta",
    component: MyAccount,
  },
  {
    path: "/carrito",
    name: "cart",
    component: ShoppingCart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

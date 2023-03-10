<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-10 offset-md-2">
        <Breadcrumb :breadcrumbList="getBreadcrumb" />
      </div>
      <div class="col-md-2 col-12 mb-md-0 mb-3">
        <CategoryList :currentCategory="currentCategory" />
      </div>
      <div class="col">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div
            v-for="{
              id,
              title,
              category,
              evaluate,
              price,
              origin_price,
              imageUrl
            } in filterProductsList"
            :key="id"
            class="col"
          >
            <div style="cursor: pointer" class="card h-100 border-0" @click="goDetail(id)">
              <div class="card__image rounded overflow-hidden">
                <div class="ratio ratio-16x9">
                  <img class="card-img-top object-fit-cover" :alt="title" :src="imageUrl" />
                </div>
              </div>
              <div class="card-body d-flex flex-column align-items-start pt-2">
                <span class="badge rounded-pill mb-2" :class="getBadgeColor(category)">{{
                  category
                }}</span>
                <h5 class="card-title">{{ title }}</h5>
                <div class="d-inline-flex align-items-center gap-1 mb-2">
                  <i class="bi bi-star-fill text-info"></i>
                  <p class="mb-0 text-secondary">
                    <small v-if="evaluate">{{ evaluate }}</small>
                    <small v-else>0</small>
                  </p>
                </div>
                <p class="mt-auto mb-0 lh-1 fs-7 text-muted text-decoration-line-through">
                  {{ getPrice(origin_price) }}
                </p>
                <p class="mb-0 fw-bold">{{ getPrice(price) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading ref="loading" />
  </div>
</template>

<script>
import Loading from '@/components/Loading.vue';
import CategoryList from '@/components/CategoryList.vue';
import Breadcrumb from '@/components/Breadcrumb.vue';

import { currency } from '@/utlis/global';
import { getProductsApi } from '@/utlis/api';
import { categoryMap } from '@/utlis/context';

export default {
  components: {
    Loading,
    CategoryList,
    Breadcrumb
  },
  data() {
    return {
      products: [],
      currentCategory: '??????'
    };
  },
  computed: {
    getBreadcrumb() {
      return [
        {
          title: '??????',
          pathName: 'Home'
        },
        {
          title: this.currentCategory === '??????' ? '????????????' : `????????????(${this.currentCategory})`
        }
      ];
    },
    filterProductsList() {
      if (this.currentCategory === '??????') return this.products;
      return this.products.filter(({ category }) => this.currentCategory === category);
    }
  },
  methods: {
    getBadgeColor(category) {
      return `text-bg-${categoryMap.get(category) || 'secondary'}`;
    },
    getPrice(price) {
      return currency(price, 'NT ');
    },
    getProductList() {
      this.$refs.loading.show();
      getProductsApi()
        .then((res) => {
          const {
            data: { products }
          } = res;

          if (products === null) {
            this.products = [];
            return;
          }

          this.products = Object.values(products);

          this.$refs.loading.hide();
        })
        .catch((err) => {
          console.log(err);
          this.$refs.loading.hide();
        });
    },
    goDetail(id) {
      this.$router.push(`/product/${id}`);
    }
  },
  mounted() {
    this.getProductList();

    this.$watch(
      () => this.$route.params,
      (toParams) => {
        const { category = '??????' } = toParams;
        this.currentCategory = category;
      }
    );
  }
};
</script>

<style>
.card__image img {
  transition: transform 0.8s ease 0s;
  cursor: pointer;
}

.card__image img:hover {
  transform: scale(1.2);
}
</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <p class="navbar-brand m-0">Vue 直播班 第五週主線任務</p>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="{ active: $route.name === 'ProductList' }"
              :to="{ name: 'ProductList' }"
              >產品列表</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="{ active: $route.name === 'ShopCart' }"
              :to="{ name: 'ShopCart' }"
              >購物車</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :class="{ active: $route.name === 'Order' }"
              :to="{ name: 'Order' }"
              >訂單
            </RouterLink>
          </li>
          <li class="nav-item ms-3">
            <button type="button" class="btn btn-outline-secondary" @click="$emit('logout')">
              登出
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

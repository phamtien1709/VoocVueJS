<template>
  <div class="col-full push-top">
    <h1>Welcome to the Forum</h1>
    <category-list :categories="categories"></category-list>
  </div>
</template>

<script>
import CategoryListVue from "../components/CategoryList.vue";
//
export default {
  name: "PageHome",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
    categories() {
      return Object.values(this.$store.state.categories);
    }
  },
  beforeCreate() {
    this.$store.dispatch("fetchAllCategories").then(categories => {
      categories.forEach(category =>
        this.$store.dispatch("fetchForums", {
          ids: Object.keys(category.forums)
        })
      );
    });
  },
  components: {
    "category-list": CategoryListVue
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

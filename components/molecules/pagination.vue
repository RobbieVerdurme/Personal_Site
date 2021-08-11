<template>
  <nav aria-label="Page navigation" class="center">
    <ul class="pagination justify-content-center">
      <!--/Previous page-->
      <li v-if="prev" class="page-item disabled">
        <nuxt-link :to="{name:'projects', query: {page: currentPage - 1}}" class="page-link">
          {{ $t('projects.previous') }}
        </nuxt-link>
      </li>
      <!--/Previous page-->

      <!--Display first item-->
      <li v-if="fromPage !== 1 && totalPageCount !== 1" class="page-item">
        <nuxt-link :to="{name: 'projects', query: {page: 1}}" class="page-link">
          1
        </nuxt-link>
      </li>
      <!--/Display first item-->

      <!--If ... has to be displayed-->
      <li v-if="fromPage !== 1 && fromPage - 1 !== 1" class="page-item">
        ...
      </li>
      <!-- /If ... has to be displayed-->

      <!--Pages-->
      <li
        v-for="pagenumber in pageItems"
        :key="pagenumber"
        class="page-item"
        :class="currentPage === pagenumber?'page-item active': ''"
      >
        <nuxt-link :to="{name: 'projects', query: {page: pagenumber}}" class="page-link">
          {{ pagenumber }}
          <span class="sr-only">(current)</span>
        </nuxt-link>
      </li>
      <!--/Pages-->

      <!--If ... has to be displayed-->
      <li v-if="toPage !== totalPageCount && !this.pageItems.find(x => (x + 1) === this.totalPageCount)" class="page-item">
        ...
      </li>
      <!--/If ... has to be displayed-->

      <!--Display last item-->
      <li v-if="toPage !== totalPageCount" class="page-item">
        <nuxt-link
          :to="{name: 'projects', query: {page: totalPageCount}}"
          class="page-link"
        >
          {{ totalPageCount }}
        </nuxt-link>
      </li>
      <!--/Display last item-->

      <!--Next page-->
      <li v-if="next" class="page-item">
        <nuxt-link :to="{name:'projects', query:{page: currentPage + 1}}" class="page-link">
          {{ $t('projects.next') }}
        </nuxt-link>
      </li>
      <!--/Next page-->
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      // items to display
      filterdItems: [],
      // settings to filter the items
      offset: 0,
      limit: 3,
      // settings to configure pagination
      pagelimit: 3,
      fromPage: null,
      toPage: null,
      next: null,
      prev: null
    }
  },
  computed: {
    /**
     * slice items to the offset en limit per page
     */
    filter () {
      return this.items.slice(this.offset, this.limit + this.offset)
    },
    /**
     * get the total page cound
     */
    totalPageCount () {
      return Math.ceil(this.items.length / this.limit)
    }
  },
  watch: {
    items () {
      this.updateProperties()
    },
    filterdItems () {
      this.updateFilterdItems()
    },
    currentPage () {
      this.updateProperties()
    }
  },
  created () {
    this.updateProperties()
  },
  methods: {
    updateProperties () {
      const pagelimitSides = Math.floor(this.pagelimit / 2)
      // get max page and min page
      this.toPage = parseInt(this.currentPage) + pagelimitSides > this.totalPageCount ? this.totalPageCount : parseInt(this.currentPage) + pagelimitSides
      this.fromPage = parseInt(this.currentPage) - pagelimitSides < 1
        ? 1
        : this.toPage === this.totalPageCount
          ? this.totalPageCount - this.pagelimit + 1
          : parseInt(this.currentPage) - pagelimitSides
      // generate the page numbers
      let countFromPage = this.fromPage
      this.pageItems = [...new Array(this.pagelimit)].map(x => countFromPage++)
      // generate pageoffset
      this.offset = this.currentPage === 1 ? 0 : ((this.currentPage - 1) * this.limit)
      // get items to be displayed
      this.filterdItems = this.items.slice(this.offset, this.limit + this.offset)
      // check if there is a next page
      this.next = this.hasNextPage()
      this.prev = this.hasPrevPage()
    },
    /**
     * check if there is a nex page
     */
    hasNextPage () {
      const nextOffset = this.offset + this.limit
      return !!this.items.slice(nextOffset, this.limit + nextOffset).length
    },
    /**
     * check if there is a previous page
     */
    hasPrevPage () {
      const prevOffset = this.offset - this.limit
      return !!this.items.slice(prevOffset, this.limit + prevOffset).length
    },
    /**
     * send filterd items to parrent
     */
    updateFilterdItems () {
      this.$emit('updateFilterdItems', this.filterdItems)
    }
  }
}
</script>
<style scoped>
.center {
    position: absolute;
    left: 50%;
    margin-left: -110px;
}
.pagination > .page-item.active > a {
  background-color: #4caf50 !important;
}
</style>

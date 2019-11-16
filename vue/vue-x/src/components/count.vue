<template>
  <div class="count">
    {{count}}
    <!-- <button @click="test1">+</button>
    {{$store.state.count}}-->
    <button @click="addAction(10)">+</button>
    <button @click="reduce">-</button>
    {{getCount}}
  </div>
</template>

<script>
import {mapState, mapMutations, mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      //   myCount: null
    }
  },
  //   computed: {
  //     myCount () {
  //       return this.$store.state.count
  //     }
  //   },
  //   computed: mapState({
  //     // count: state => state.count
  //     myCount (state) {
  //       return state.count
  //     }
  //   }),
  //   computed: mapState(['count']),

  computed: {
    ...mapState(['count']),
    ...mapGetters(['getCount'])
  },

  methods: {
    ...mapMutations([
    //   'add',
      'reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
  }
  //   mounted () {
  //     this.myCount = this.$store.state.count
  //   }
}
</script>

<style>
</style>

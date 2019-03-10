<template>
  <span :title="timestamp | humanFriendlyDate">{{timestamp | diffFromHuman}}</span>
</template>

<script>
  import moment from 'moment'
  export default {
    name: 'app-date',
    props: {
      timestamp: {
        required: true,
        type: Number
      }
    },
    filters: {
      humanFriendlyDate (date) {
        return moment.unix(date).locale('vi').format('MMMM Do YYYY, h:mm:ss a')
      },
      diffFromHuman (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>
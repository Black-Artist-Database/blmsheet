<template>
  <vue-bootstrap-typeahead
    :data="locationsData"
    v-model="filters.location"
    size="sm"
    minLength=1
    :serializer="s => s"
    placeholder="Type a location..."
  />
</template>

<script>
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import axios from 'axios';

export default {
    name: 'LocationTypeAhead',
    props: {
        filters: Object
    },

    components: {
        VueBootstrapTypeahead
    },

    mounted(){
        this.fetchLocations()
    },

    data() {
        return {
            locationsData: [],
        }
    },

    methods: {
        fetchLocations(){
            axios.get('https://blmsheet-api-hnzs3737wa-ew.a.run.app/api/locations')
            .then((response) => (
                this.locationsData = response.data
            ))
        }
    },

    watch: {

    }

}
</script>
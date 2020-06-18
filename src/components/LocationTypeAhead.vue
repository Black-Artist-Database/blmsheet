<template>
    <div>
      <vue-bootstrap-typeahead
        :data="locationsData"
        v-model="filters.location"
        size="sm"
        minLength=1
        :serializer="s => s"
        :class="{'disabled': filters.name !== ''}"
        placeholder="Type a location..."
      />
    </div>
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
            axios.get('/api/locations')
            .then((response) => (
                this.locationsData = response.data
            ))
        }
    },

    watch: {

    }

}
</script>

<style lang="scss" scoped>
    .disabled {
        opacity: 0.7;
        pointer-events: none;
        /deep/ input {
            background-color: rgb(233, 236, 239);
        }
    }
    @media (max-width: 600px) {
        div {
            width: 100%;
            /deep/ .input-group {
                width: 100%;
                display: flex;
                justify-content: center;
            }
        }
    }
</style>

<!-- Unscoped Styles For Dynamic Generated Items -->
<style>
    .list-group-item  {
        text-transform: capitalize;
    }
</style>
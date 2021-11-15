<template>
    <v-data-iterator
      :items="items"
      :items-per-page.sync = "itemsPerPage"
      :page.sync = "page"
      hide-default-footer
    >
    <template v-slot:default="props">
        <v-card>
            <v-card-title width="100%">
                <v-row>
                    <v-col 
                        v-for="title in titles" 
                        :key="title.id"
                        :sm="title.width"
                    >
                        <v-card-text><span class="font-weight-black">{{title.text}}</span></v-card-text>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card
                width="100%"
                v-for="item in props.items"
                :key="item.id"
            >
                <v-row>
                    <v-col sm="1">
                        <v-card-text>{{item.id}}</v-card-text>
                    </v-col>
                    <v-col sm="2">
                        <v-card-text>{{item.date}}</v-card-text>
                    </v-col>
                    <v-col sm="2">
                        <v-card-text>{{item.total}}</v-card-text>
                    </v-col>
                    <v-col sm="2">
                        <v-card-text>{{item.method}}</v-card-text>
                    </v-col>
                    <v-col sm="2">
                        <v-card-text>{{item.status}}</v-card-text>
                    </v-col>
                    <v-col sm="3">
                        <v-btn depressed color="green"><span class="white--text">Details</span></v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <span
                        class="mr-4
                        grey--text"
                    >Page {{ page }} of {{ numberOfPages }}
                    </span>
                    <v-btn @click="formerPage">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn>
                    <v-btn @click="nextPage">
                        <v-icon>mdi-chevron-right</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-card>
    </template>

    </v-data-iterator> 
</template>

<script>
  export default {
    props : ["items"],
    data : function() {
        return {
            titles : [
                {id : 1, width : 1, text : "Id"},
                {id : 2, width : 2, text : "Date"},
                {id : 3, width : 2, text : "Total"},
                {id : 4, width : 2, text : "Method"},
                {id : 5, width : 2, text : "status"},
                {id : 6, width : 3, text : "Action"},
            ],
            itemsPerPage : 6,
            page : 2
        }
    },
    computed : {
        numberOfPages: function() {
            return Math.ceil(this.items.length/this.itemsPerPage)
        },
    },
    methods : {
        nextPage: function() {
            if ( this.page < this.numberOfPages ) this.page +=1
        },
        formerPage: function() {
            if ( this.page > 1) this.page -=1
        }
    }
  }

</script>

<template>
    <!-- <v-text-field 
        :disabled=!isEditing 
        :label=field 
        :value=details></v-text-field> -->
        <v-row>
            <v-col cols="4">
                <v-subheader>{{field}}</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field v-if="!isEditing"
                    flat
                    solo
                    :value = "details"
                ></v-text-field>
                <v-text-field v-else
                    :value = "details"
                ></v-text-field>
            </v-col>
        </v-row>
</template>

<script>
export default {
    props: ["field", "details", "isEditing"]
}
</script>

<style>

</style>
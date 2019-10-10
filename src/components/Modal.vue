<template>
<div>
  <b-modal :id="id" size="xl" @hidden="closeModal" hide-footer>
    <template v-slot:modal-title>
      <slot name="header"></slot>
    </template>
    <div class="d-block text-center">
        <slot name="body"></slot>
    </div>
    <b-button class="mt-3" block @click="closeModal()">Close Me</b-button>
  </b-modal>
</div>
</template>

<style>
.content {
    white-space: pre-wrap;
}
</style>
<script>
  export default {
    name: "Modal",
      props: {
          id: {
              required: true,
              type: String
          }
      },
      data(){
          return{
            bodytext :"Hello World",
          }
      },
      methods:{
          openModal(){
            this.$bvModal.show(this.id)
          },
          closeModal(){
            this.$emit("modalclosed")
            },

      },
  }
</script>
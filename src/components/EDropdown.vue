<template>
<div>
    <div class="Edropdown" ref="EdropdownHtml">
        <input class="Edropdown-value" type="text" readonly v-model="RenderValue" @click="toggleDropdown">
        <button class="Edropdown-buttonClear" v-if="RenderValue" @click.prevent="clearRenderValue()">🗙</button>
        <button class="Edropdown-buttonSelect" v-if="!this.openSlider" @click.prevent="toggleDropdown">&#9660;</button>
        <button class="Edropdown-buttonSelect" v-else @click.prevent="toggleDropdown">&#9650;</button>
        <div class="Edropdown-show" v-for="(item, i) in options" :key="i" v-show="openSlider">
            <div @click="selectedItem(item)">
                {{ renderOption(item) }}
            </div>
        </div>   
</div>
</div>
</template>
<script>
// link http://localhost:8080/EDropdown
export default {
    name: 'EDropdown',
    props: {
        "value" : {
            type: [String,Number,Object],
            default: ""
        },
            
        "options" : {
            type: Array,
            default : () => [] 
        },
        "returnObject": {
            type: Boolean,
            default: false
        },
        "renderOption": {
            type: Function,
            default(option) {
                return option.label
            }
        }
    },
    data(){
        return {
            RenderValue: "",
            openSlider: false,
            currentSelected: {}
        }
    },
    mounted() {
    document.addEventListener("click", this.onClickOutside);
        },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutside);
        },
    watch: {
        currentSelected(n, o) {
            if(n !== o) this.$emit("change", n)
        },
        value: [{
    	    handler: 'setRenderValue'
    	}],
        options(list) {
            this.options = list
            this.setRenderValue()
        }
    },
    created(){
        this.setRenderValue()
    },
    /*computed:{
        compValue(){
            Object.keys(this.options[0][0])
        },
        compLabel(){
            Object.keys(this.options[0][1])
        }
    },*/
    methods:{
        onClickOutside(event){
            if (this.$refs.EdropdownHtml.contains(event.target)) return;
        this.openSlider = false
        },
        
        setRenderValue(){
            /*console.log(Object.keys(this.options[0]))
            alert(this.compValue, this.compLabel)
            this.value
            console.log(this.value)*/
            if(this.value == null) this.RenderValue = ''
            else{
            if(this.returnObject) {
                let item = this.options.find(el => el.value == this.value.value)
                if(item) this.RenderValue = this.renderOption(item)
                else this.RenderValue = ''
            } else {
                let item = this.options.find(el => el.value == this.value)
                if(item) this.RenderValue = this.renderOption(item)
                else this.RenderValue = ''
            }
            }
        },

        emitValue(item){
            this.openSlider = false
            this.$emit('input', (this.returnObject ? item : item.value))
        },

        clearRenderValue(){
            this.RenderValue = ''
            this.$emit('clear')
            this.$emit('input', null)
            this.openSlider = false
        },
        
        toggleDropdown(){
            this.openSlider=!this.openSlider
            if(this.openSlider){
                this.$emit("openDropdown", this.options)
            } else {
                this.$emit("closeDropDown")
            }
        },

        selectedItem(item){
            this.currentSelected = item
                this.RenderValue = item.label;
                this.$emit("select", item)
                this.emitValue(item)              
        }
    }
}

</script>
<style scoped>
.Edropdown{
    width: 100%;
    cursor: pointer; 
}
    .Edropdown-value{   
        padding-left:16px;
        border: 1px solid #C8C8C8;
        border-radius: 4px;
        background-color:white;
        margin-top: -1px;
        width: 80%;
        height: 31px;
        cursor: pointer;
    }
    .Edropdown-value:focus {
        outline: none !important;
    }

    .Edropdown-buttonSelect{
        margin-left: -3px;
        border: 1px solid #C8C8C8;
        background-color: white;
        width: 20%;
        height: 31px;
    }
    .Edropdown-buttonClear{
        border: none;
        background-color: transparent;
        outline: none;
        margin-left: -20%;
        width:20%;
        height: 30px;
        opacity: 0.9;
    }

    .Edropdown-show{
        padding-left:10px;
        min-width: 20px;
        width: 99%;
        margin-top: -3px;
        background-color:white;
        border-left: 1px solid #DDDDDD;
        border-bottom: 1px solid #DDDDDD;
        border-right: 1px solid #DDDDDD;
        cursor: pointer;
    }
</style>
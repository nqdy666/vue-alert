import oAlert from './Alert.vue';
import oConfirm from './Confirm.vue';
import oPrompt from './Prompt.vue';
import oModal from './Modal.vue';
import oBox from './Box.vue';
import assign from 'object-assign';

let aCom = [oAlert,oConfirm,oPrompt,oBox];

aCom = aCom.map(item => {
    return  {
        install(Vue,options){
            const sub = Vue.extend(item);
            const oCache = {};

            function modal(options = {show:true}){
                const com = new sub;
                const vm = com.$mount();
                document.querySelector(options.parent || 'body').appendChild(vm.$el);
                assign(com,options);
            }
            Vue[item.name] = Vue.prototype['$' + item.name] = modal;
        }
    }
});

const [Alert,Confirm,Prompt,Box] = aCom;

export {Alert,Confirm,Prompt,Box};
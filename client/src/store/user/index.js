import userMutations from "./mutations";
import userActions from "./actions";
import userGetters from "./getters";

export default{
    namespaced:true,
    state(){
        return{
            enquiries:[]
        }
    },
    mutations:userMutations,
    actions:userActions,
    getters:userGetters
}

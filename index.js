import Vue from 'vue';
import { huettenbuchung } from './src/huettenbuchung/huettenbuchung';

new Vue({
    // selector of the element that will be controlled by the Vue app
    el: '#huettenbuchung',
    // content that will be put inside the element - we're simply calling another component here!
    template: '<huettenbuchung />',
    components: {
        // will register a new component <loaded-message> with the component configuration imported from the other file
        'huettenbuchung': huettenbuchung
    }
});

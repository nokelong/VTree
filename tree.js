
var treeJSON = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' }
          ]
        }, 
        {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
          name: 'child folder',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                { name: 'hello' },
                { name: 'wat' },
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                }
              ]
            }
          ]
        }
  ]
}

var TreeNode = Vue.extend({
    name: 'TreeNode',
    props: {
      node: {
        type: Object
      }
    },  
    template: `<li >{{node.name}}
        <ul v-if="node.children && node.children.length"><TreeNode v-for="(item, index) in node.children" :node="item" :key="index"></TreeNode></ul>
    </li>`
});

var Tree = Vue.extend({
    name: 'Tree',
    props: ['node'],
    template: `<ul><tree-node :node="node"></tree-node></ul>`,
    components: {
      'tree-node': TreeNode
    }
});



new Vue({
    el: '#app',
    data: {
      treeData: treeJSON,
      title: 'Vue无层级树'
    },
    components:{Tree}
})
     
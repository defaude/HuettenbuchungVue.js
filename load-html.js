/**
 * Little trick that allows to import html into a string :)
 */
module.exports = {
    translate: mod => {
        mod.metadata.format = 'es6';
        mod.source = `export default \`${mod.source}\`;`;
    }
};

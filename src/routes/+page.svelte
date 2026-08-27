<script>
    import { inTransitionParams, outTransitionParams } from '$lib/transitioning';
    import { fade } from 'svelte/transition'
    import Lightbox from '../components/lightbox.svelte';

    /** 
    * @typedef {object} Work
    * @property {string} name
    * @property {string} thumbnail
    * @property {string | undefined} description
    * @property {string} path
    */
    /**
     * @type {Work[]}
     */
    let works = [];

    /**
     * @param {string | undefined} dimension
     * @param {string | undefined} material
     */
    const getDescription = (dimension, material) => {
        if (dimension && material)
            return  `${dimension} | ${material}`;
        
        if (material)
            return material;

        if (dimension) 
            return dimension;

        return undefined;
    };

    /** 
    * @typedef {object} Painting
    * @property {string} name
    * @property {string} thumbnail
    * @property {string} dimension
    * @property {string} path
    * @property {string} material
    * @property {boolean} visible
    */
    const getWorks = async () => {
        const getImages = async () => {
            const imagesRes = await fetch("/data/images.json");

            /**@type {Painting[]}*/
            const imagesObjs = await imagesRes.json();
            imagesObjs.reverse();
            for (const imageObj of imagesObjs.filter(x => x.visible)) {
                works.push({
                    name: imageObj.name,
                    thumbnail: imageObj.thumbnail,
                    description: getDescription(imageObj.dimension, imageObj.material),
                    path: imageObj.path,
                });
            }
        }
        await getImages();
    }
</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <!-- {#await getWorks()}
    <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
    {:then _} 
    <Lightbox works={works} />
    {/await} -->
</section>
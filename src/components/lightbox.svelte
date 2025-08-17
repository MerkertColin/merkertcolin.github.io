<script>
    import ImgCard from "./imgCard.svelte";

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
    export let works;
    /**
     * @type {string | any}
     */
    let lightboxImageSource = '';
    let lightboxImageAlt = '';
    let lightboxVisibility = ''

    /**
     * @param {string | any} srcPath
     * @param {string | any} imgAlt
     */
    const showLightbox = (srcPath, imgAlt) => {
        const navelem = document.getElementById('topLevelNav');
        lightboxImageSource = srcPath;
        lightboxImageAlt = imgAlt;
        lightboxVisibility = 'active';
        document.body.style.overflow = 'hidden';
        if (navelem) {
            navelem.style.zIndex = '999';
        }
    }

    const hideLightbox = () => {
        lightboxImageSource = '';
        lightboxImageAlt = '';
        lightboxVisibility = '';
        document.body.style.overflow = '';
    }
</script>

<div>
    <div class="lightbox {lightboxVisibility}" on:click={() => hideLightbox()} >
        <img srcset={lightboxImageSource} alt={lightboxImageAlt} />
    </div>
    <div class="gridrow ">
        <div class="gridcol">
            {#each works as work, i}
                {#if i % 4 === 0}
                    <ImgCard 
                    title={work.name} 
                    description={work.description} 
                    imgPath={work.thumbnail}
                    on:click={() => showLightbox(work.path, work.name)}/>
                {/if}
            {/each}
        </div>
        <div class="gridcol">
            {#each works as work, i}
                {#if i % 4 === 1}
                    <ImgCard 
                    title={work.name} 
                    description={work.description} 
                    imgPath={work.thumbnail}
                    on:click={() => showLightbox(work.path, work.name)}/>
                {/if}
            {/each}
        </div>
        <div class="gridcol">
            {#each works as work, i}
                {#if i % 4 === 2}
                    <ImgCard 
                    title={work.name} 
                    description={work.description} 
                    imgPath={work.thumbnail}
                    on:click={() => showLightbox(work.path, work.name)}/>
                {/if}
            {/each}
        </div>
        <div class="gridcol">
            {#each works as work, i}
                {#if i % 4 === 3}
                    <ImgCard 
                    title={work.name} 
                    description={work.description} 
                    imgPath={work.thumbnail}
                    on:click={() => showLightbox(work.path, work.name)}/>
                {/if}
            {/each}
        </div>
    </div>
</div>


<style>

.lightbox {
    display: none;
}

.lightbox.active {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .8);
    z-index: 1000;
    overflow: hidden;
    display: flex;
}

.lightbox.active img {
    object-fit: scale-down;
    width: 100%;
    height: 100%;
}

.gridrow {
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px;
    max-width: 75vw;
    margin: auto;
}

/* Create four equal columns that sits next to each other */
.gridcol {
    flex: 25%;
    max-width: 25%;
    padding: 0 4px;
}

.gridcol .card {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
    cursor: pointer;
}

img {
    border-radius: 0;
    border: none;
}

.card {
    border: none;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
    .gridcol {
        flex: 50%;
        max-width: 50%;
    }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
    .gridcol {
        flex: 100%;
        max-width: 100%;
    }
}

.card-img-overlay {
    background-color: rgba(0, 0, 0, .5);
    color: #fff;
    justify-content: center;
    border: none;
    border-radius: none;
    opacity: 0;
}

</style>
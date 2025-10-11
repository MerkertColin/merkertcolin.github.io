<script>
    /**@type {string | undefined}*/
    export let title = undefined;

    /**@type {string | undefined}*/
    export let description = undefined;

    /**@type {string | undefined}*/
    export let imgPath = undefined;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click class="card">
    <img class="card-img img-thumbnail" {title} src={imgPath} alt={title} loading="lazy" />
    <div class="card-body">
        {#if title}<h1 class="card-title">{title}</h1>{/if}
        {#if description}<h5 class="card-text">{description}</h5>{/if}
    </div>
</div>

<style>
    h1 {
        font-family: "Gochi Hand", cursive;
        font-weight: 400;
        font-style: normal;
    }

    img {
        border-radius: 0;
        border: none;
        cursor: pointer;
    }

    .card {
        border: none;
    }
</style>
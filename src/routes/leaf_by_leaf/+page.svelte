<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fade } from "svelte/transition";
    import Heading from "../../components/heading.svelte";

    /**
     * @type {string[] | any[]}
     */
    let imagePaths = [];
    for (let i = 1; i < 5; i++)
    {
        imagePaths.push(`images/leaf_by_leaf/${i}.jpeg`);
    }

</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <div class="container-fluid">
        {#each imagePaths as imgPath}
            <img class="img-fluid d-block mt-1" src={imgPath}/>
        {/each}
    </div>
    <div class="mt-2">
        <Heading>Leaf by Leaf (2025)</Heading>
        <p>
            Leaf by Leaf is a collaborative drawing project developed for the exhibition +1 – Hospitality
    as Artistic Practice. Inspired by the Surrealist practice of Cadavre Exquis, the project
    reimagines the exhibition format as a growing network of artistic exchange.</p>
        <p>
            Winkler created a series of blotted-line prints and invited artists, writers, composers,
    filmmakers, scientists, designers, and practitioners from beyond the arts to respond directly
    on the original works. Each contribution transforms the previous gesture, allowing individual
    visual languages to merge into shared compositions. Rather than illustrating a common
    theme, the project embraces uncertainty, trust, and the unexpected possibilities that emerge
    through collaboration.
        </p>
        <p>
            Using paper and drawing in their most elemental form, Leaf by Leaf explores how authorship
    can become collective without dissolving individual voices. Every work records a
    conversation—one line leading to the next, one gesture opening space for
    another—revealing collaboration not as consensus, but as an ongoing process of curiosity,
    generosity, and exchange.
        </p>
        <p>
            The project was presented as part of +1 – Hospitality as Artistic Practice in Frankfurt and
    includes contributions by, among others, Lou Benesch, Charlotte Eta Mumm, Johannes
    Daniel, Isidore Bethel, Olga Ullmann, trippiesteff, Katharina Herzberger, LiLi Nacht, Marjolein
    Guldentops, and Felix Remme.
        </p>
    </div>
</section>
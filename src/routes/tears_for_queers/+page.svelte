<script>
    import { inTransitionParams, outTransitionParams } from "$lib/transitioning";
    import { fade } from "svelte/transition";
    import Heading from "../../components/heading.svelte";

    /**
     * @type {string[] | any[]}
     */
    let imagePaths = [];
    for (let i = 1; i < 22; i++)
    {
        imagePaths.push(`images/tears_for_queers/${i}.jpeg`);
    }

</script>

<section in:fade={inTransitionParams} out:fade={outTransitionParams}>
    <div class="container-fluid">
        {#each imagePaths as imgPath}
            <img class="img-fluid d-block mt-1" src={imgPath}/>
        {/each}
    </div>
    <div class="mt-2">
        <Heading>Tears for Queers (2024)</Heading>
        <p>
            Tears for Queers was a solo exhibition at the Ausstellungshalle Kassel, bringing together 32
paintings and a large-scale installation. The exhibition examines how children's media,
popular culture, and early visual experiences shape ideas of identity, desire, and belonging
long before they can be questioned.
        </p>
        <p>
            Drawing on comic aesthetics and familiar childhood imagery, the works intertwine playful
visual languages with queer histories. References to cruising, the Stonewall Riots, and some
of the earliest literary testimonies by imprisoned queer men from Nazi concentration camps
reveal how overlooked histories can exist beneath seemingly innocent images. Throughout
the exhibition, childhood becomes a site where social norms are first learned—and where
they can also be unlearned.
        </p>
        <p>
            At the center of the exhibition, a room-sized installation transformed the exhibition hall into
an unsettling landscape of memory. Black children's beds resembling coffins stood beneath
360 helium balloons, accompanied by a rocking horse and a cattle bone. While these objects
initially evoke nostalgia, they gradually reveal themes of vulnerability, mortality, and
exclusion. The cattle bone introduces a physical presence of death, confronting viewers with
the question of how many queer lives might never have had the chance to experience
childhood at all.
        </p>
        <p>
            The exhibition was informed by testimonies from parents who rejected or wished harm upon
their queer children. These accounts gave rise to the speculative premise that later evolved
into Father's Death Wish: What if queerness could be detected before birth, similar to
prenatal screening? Rather than proposing an answer, the work exposes the violence
embedded in such a question and reflects on the conditions under which queer lives are
accepted, erased, or denied.
        </p>
        <p>
            A recurring series of charcoal drawings and lithographs depicts pairs of sailors from the
Second World War embracing and kissing. Through repetition, these images function almost
like a visual mantra, reclaiming gestures of intimacy that were historically criminalized and
largely erased from public memory.
        </p>
        <p>
            Across the exhibition, iconic figures from Disney and comic culture are deliberately
reimagined. Snow White, Dumbo, and other symbols of an idealized childhood are placed in
unexpected, sometimes unsettling contexts. By disrupting these familiar narratives, Tears for
Queers questions how popular media constructs gender roles, desire, and ideas of
normality, revealing that even our earliest fantasies are never ideologically neutral.
        </p>
    </div>
</section>
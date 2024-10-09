<script lang="ts">
  import {
    Section,
    HeroHeader,
    FeatureDefault,
    FeatureItem,
  } from "flowbite-svelte-blocks";
  import {
    RocketSolid,
    FlowbiteSolid,
    ImageOutline,
    RectangleListSolid,
    EyeSolid,
    MoonSolid,
    MobilePhoneSolid,
    WindowSolid,
  } from "flowbite-svelte-icons";
  import HyperDarkControls from "../../components/HyperDark/HyperDarkControls.svelte";
</script>

<Section name="feature">
  <HeroHeader
    class="mx-auto mb-8 max-w-screen-md sm:mx-0 lg:mb-16"
    h2Class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
    pClass="text-gray-500 sm:text-xl dark:text-gray-400"
  >
    <svelte:fragment slot="h2">Projects</svelte:fragment>
  </HeroHeader>
  <FeatureDefault>
    <a href="https://scholar.google.com/citations?user=bG7pZHAAAAAJ&hl=en">
      <FeatureItem>
        <svelte:fragment slot="icon">
          <img
            alt="Google Scholar"
            src="/images/scholar-logo.webp"
            class="scale-[100%] !bg-none"
          />
        </svelte:fragment>
        <svelte:fragment slot="h3">Publications</svelte:fragment>
        <svelte:fragment slot="paragraph">
          My publications on Google Scholar.
        </svelte:fragment>
      </FeatureItem>
    </a>
    <a href="https://scikit-learn.org">
      <FeatureItem>
      <svelte:fragment slot="icon"
        >
        <img
        alt="Google Scholar"
        src="https://banner2.cleanpng.com/20180805/kff/764f83747df6e1ceaffa9bd517ec0768.webp"
        class="scale-[100%] !bg-none"
      />
  </svelte:fragment>
      <svelte:fragment slot="h3">Scikit-Learn</svelte:fragment>
      <svelte:fragment slot="paragraph">
        Core contributor to the popular machine learning library.
      </svelte:fragment>
    </FeatureItem>
    </a>
    <FeatureItem>
      <svelte:fragment slot="icon">
      </svelte:fragment>
      <svelte:fragment slot="h3"></svelte:fragment>
      <svelte:fragment slot="paragraph">
      </svelte:fragment>
    </FeatureItem>
  </FeatureDefault>
</Section>

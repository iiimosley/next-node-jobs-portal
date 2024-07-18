import Header from "../_components/headers/base";
import LinkBlocksContainer from "./_components/linkBlocks/container";
import LinkBlock from "./_components/linkBlocks/linkBlock";

export default function Home() {
  return (
    <>
      <Header title="Job Portal" />
      <LinkBlocksContainer>
        <LinkBlock
          title="Upcoming Jobs"
          description={"Find upcoming jobs and available providers."}
          href="/jobs/upcoming"
        />
        <LinkBlock
          title="Coming Soon!"
          description="New features are on the way."
        />
      </LinkBlocksContainer>
    </>
  );
}

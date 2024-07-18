import Header from "./_components/header";
import LinkBlocksContainer from "./_components/linkBlocks/container";
import LinkBlock from "./_components/linkBlocks/linkBlock";
import Main from "./_components/main";

export default function Home() {
  return (
    <Main>
      <Header />
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
    </Main>
  );
}

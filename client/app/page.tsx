import Header from "./_components/home/header";
import LinkBlocksContainer from "./_components/home/linkBlocks/container";
import LinkBlock from "./_components/home/linkBlocks/linkBlock";
import Main from "./_components/home/main";

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

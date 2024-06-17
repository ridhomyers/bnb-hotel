import EmptyState from "@/components/EmptyState";

import getListings, { IListingsParams } from "@/actions/getListings";
import ClientOnly from "@/components/ClientOnly";
import ClientOnlyHome from "@/components/ClientOnlyHome";

interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return <ClientOnlyHome listings={searchParams} />;
};

export default Home;

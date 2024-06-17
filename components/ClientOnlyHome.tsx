"use client";

import Container from "@/components/Container";
import ListingCard from "@/components/listings/ListingCard";

import getListings, { IListingsParams } from "@/actions/getListings";
import getCurrentUser from "@/actions/getCurrentUser";
import ClientOnly from "@/components/ClientOnly";

interface ClientOnlyProps {
  listings: IListingsParams;
}

const ClientOnlyHome = async ({ listings }: ClientOnlyProps) => {
  const listing = await getListings(listings);
  const currentUser = await getCurrentUser();

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listing.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default ClientOnlyHome;

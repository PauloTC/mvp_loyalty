import NestedLayout from "@/components/layout";
import LandingComponent from "@/components/landing";
import { ModalRating } from "@/components/modals";

export default function LandingPage() {
  return (
    <>
      <NestedLayout hideOnMobile={false}>
        <LandingComponent />
        <ModalRating />
      </NestedLayout>
    </>
  );
}

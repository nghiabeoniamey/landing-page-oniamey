import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import logoBig1 from "@/assets/images/nobg/svg/logo-big-1.svg";
import logoBig2 from "@/assets/images/nobg/svg/logo-big-2.svg";
import logoBig3 from "@/assets/images/nobg/svg/logo-big-3.svg";

interface TestimonialProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
}

const testimonials: TestimonialProps[] = [
    {
        image: logoBig1,
        name: "Another Name",
        userName: "@another_Name",
        comment: "This landing page is awesome!",
    },
    {
        image: logoBig2,
        name: "Another Name",
        userName: "@another_Name",
        comment:
            "This landing page is awesome!",
    },

    {
        image: logoBig3,
        name: "Another Name",
        userName: "@another_Name",
        comment:
            "This landing page is awesome!",
    },
    {
        image: logoBig1,
        name: "Another Name",
        userName: "@another_Name",
        comment:
            "This landing page is awesome!",
    },
    {
        image: logoBig2,
        name: "Another Name",
        userName: "@another_Name",
        comment:
            "This landing page is awesome!",
    },
    {
        image: logoBig3,
        name: "Another Name",
        userName: "@another_Name",
        comment:
            "This landing page is awesome!",
    },
];

export const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="container py-24 sm:py-32"
        >
            <h2 className="text-3xl md:text-4xl font-bold">
                Discover Why
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
                    People Love{" "}
        </span>
                This Landing Page
            </h2>

            <p className="text-xl text-muted-foreground pt-4 pb-8">
                Explore What Makes Our Landing Page Irresistible to Users.
            </p>

            <div
                className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
                {testimonials.map(
                    ({image, name, userName, comment}: TestimonialProps) => (
                        <Card
                            key={userName}
                            className="max-w-md md:break-inside-avoid overflow-hidden"
                        >
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <Avatar>
                                    <AvatarImage
                                        alt=""
                                        src={image}
                                    />
                                    <AvatarFallback>OM</AvatarFallback>
                                </Avatar>

                                <div className="flex flex-col">
                                    <CardTitle className="text-lg">{name}</CardTitle>
                                    <CardDescription>{userName}</CardDescription>
                                </div>
                            </CardHeader>

                            <CardContent>{comment}</CardContent>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};

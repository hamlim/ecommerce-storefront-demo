/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dEb07AjzccA
 */
import { Avatar } from "@components/ui/avatar";
import { Button } from "@components/ui/button";
import { Card, CardContent, CardHeader } from "@components/ui/card";
import Link from "next/link";

export default function Homepage() {
  return (
    <main className="flex-1">
      <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Featured Product"
              className="mx-auto overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:w-[550px] lg:h-[550px]"
              height="550"
              src="/placeholder.svg"
              style={{
                aspectRatio: "550/550",
                objectFit: "cover",
              }}
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                Discover Our Top Selling Products
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Explore our collection of best selling items and find your next favorite product.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              A selection of our most popular products, hand-picked just for you.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardHeader>
                <Avatar alt="Product Image" className="w-10 h-10" src="/placeholder.svg?height=50&width=50" />
                <h3 className="text-xl font-bold">Product 1</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">This is a description of product 1.</p>
              </CardContent>
              <Button variant="outline">View Details</Button>
            </Card>
            <Card>
              <CardHeader>
                <Avatar alt="Product Image" className="w-10 h-10" src="/placeholder.svg?height=50&width=50" />
                <h3 className="text-xl font-bold">Product 2</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">This is a description of product 2.</p>
              </CardContent>
              <Button variant="outline">View Details</Button>
            </Card>
            <Card>
              <CardHeader>
                <Avatar alt="Product Image" className="w-10 h-10" src="/placeholder.svg?height=50&width=50" />
                <h3 className="text-xl font-bold">Product 3</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">This is a description of product 3.</p>
              </CardContent>
              <Button variant="outline">View Details</Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

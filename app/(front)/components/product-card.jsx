"use client"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function ProductCard({data}) {
  return (
    <Card className="  flex-1 flex flex-col">
      <CardHeader shadow={false} floated={false} className="h-48">
        <img
          src={`/productImages/${data.image}`}
          alt="card-image"
          className="h-full w-full object-contain"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {data.name}
          </Typography>
          <Typography color="blue-gray" className="font-medium">
            {data.discount_price ? "₹" + data.discount_price : "₹" + data.price}
          </Typography>
        </div>

        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {data.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

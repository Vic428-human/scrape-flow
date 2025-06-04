"use client";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Displays the path to the current resource using a hierarchy of links.
import Link from "next/link";
const BreadcrumbHeader = () => {
  const pathName = usePathname();
  // "/users/123/edit" => ["users", "123", "edit"]
  // "/about" => ["about"]
  const paths = pathName === "/" ? [""] : pathName.split("/");
  return (
    <div className="flex items-center flex-start">
      <Breadcrumb>
        <BreadcrumbList>
          {paths.map((path, index) => (
            <BreadcrumbItem key={index}>
              <BreadcrumbLink asChild className="capitalize">
                <Link href={`/${path}`}>{path === "" ? "Home" : path} </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          ))}
          <BreadcrumbSeparator />
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;

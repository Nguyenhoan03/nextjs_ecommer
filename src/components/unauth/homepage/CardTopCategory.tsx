import Image from "next/image"
import Link from "next/link"
import Button from "@/components/ui/Button"
import { BaseCardItem } from "@/types/base-card-item"

interface CategoryProps {
    item: BaseCardItem
}

const CardTopCategory = ({ item }: CategoryProps) => {
    return (
        <div className="top-categories__card">
            <div className="top-categories__img-wrapper">
                <div className="top-categories__img-wrapper__transition">
                    <Image
                        src={item.img || "/assets/images/unauth/defaulr_image.jpg"}
                        alt={item.name}
                        className="top-categories__img"
                        width={200}
                        height={200}
                    />
                    <Button className="top-categories__btn">
                        <Link href={`products/${item.id}/${item.slug}`} prefetch={true}>View Shop</Link>
                    </Button>
                </div>
            </div>
            <div className="top-categories__content z-3">
                <div className="top-categories__name">{item.name}</div>
                <div className="top-categories__price">{item.price}</div>
            </div>
        </div>
    )
}

export default CardTopCategory

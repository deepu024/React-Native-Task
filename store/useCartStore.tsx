import { create } from 'zustand'

const useCartStore = create<any>((set: any, get: any) => ({
    cartItems: [],
    totalPrice: 0,
    deliveryCharges: 100,
    favouriteItems: [],
    addItemToCart: (item: any) => {
        const itemExists = get().cartItems.find(
            (cartItem: any) => cartItem.id === item.id
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }
            set({ totalPrice: get().totalPrice + itemExists.price })
            set({ cartItems: [...get().cartItems] });
        } else {
            set({ totalPrice: get().totalPrice + item.price })
            set({ cartItems: [...get().cartItems, { ...item, quantity: 1 }] });
        }
    },
    increaseQuantity: (productId: any) => {
        const itemExists = get().cartItems.find(
            (cartItem: any) => cartItem.id === productId
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                itemExists.quantity++;
            }
            set({ totalPrice: get().totalPrice + itemExists.price })
            set({ cartItems: [...get().cartItems] });
        }
    },
    decreaseQuantity: (productId: any) => {
        const itemExists = get().cartItems.find(
            (cartItem: any) => cartItem.id === productId
        );

        if (itemExists) {
            if (typeof itemExists.quantity === "number") {
                if (itemExists.quantity === 1) {
                    const updatedCartItems = get().cartItems.filter(
                        (item: any) => item.id !== productId
                    );
                    set({ cartItems: updatedCartItems });
                    set({ totalPrice: get().totalPrice - itemExists.price })
                } else {
                    itemExists.quantity--;
                    set({ totalPrice: get().totalPrice - itemExists.price })
                    set({ cartItems: [...get().cartItems] });
                }
            }
        }
    },
    addFavourite: (productId: any) => {
        if(get().favouriteItems.includes(productId)){
            let list = get().favouriteItems.filter(function(item: any) {
                return item !== productId
            })
            set({   favouriteItems: list });
        }else {
            set({   favouriteItems: [...get().favouriteItems, productId] });
        }
    }
}))

export default useCartStore;
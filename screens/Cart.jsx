import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../store/useCartStore";
import backArrow from '../assets/back-arrow.png'

export default function Cart({ navigation }) {
    const { cartItems, increaseQuantity, decreaseQuantity, totalPrice, deliveryCharges } = useCartStore();

    return (
        <SafeAreaView>
            <View className="px-[20px] flex flex-col h-full">

                <View className="mt-4 flex flex-row items-center
            space-x-[21px] mb-[20px]">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={backArrow}
                        />
                    </TouchableOpacity>
                    <Text className="text-base text-[#1E222B] font-normal  leading-[24px]">Shopping Cart ({cartItems.length})</Text>
                </View>

                <FlatList
                    data={cartItems}
                    className="flex-1"
                    renderItem={({ item, index }) => (
                        <View className="flex flex-row border-b border-[#EBEBFB] pb-[16px] pt-[20px]">
                            <Image
                                source={{ uri: item.thumbnail }}
                                width={50}
                                height={50}
                            />
                            <View className="pl-[26px] flex-1">
                                <Text className="text-sm text-[#1E222B] font-medium">{item.title}</Text>
                                <Text className="text-sm font-normal leading-[20px]">₹{item.price}</Text>
                            </View>
                            <View className="flex flex-row justify-center items-center space-x-[11px]">
                                <TouchableOpacity
                                    onPress={() => decreaseQuantity(item.id)}
                                >
                                    <View className="h-10 w-10 bg-[#F8F9FB] rounded-full flex justify-center items-center">
                                        <Text className="text-xl">-</Text>
                                    </View>
                                </TouchableOpacity>
                                <Text className="text-sm">{item.quantity}</Text>
                                <TouchableOpacity
                                    onPress={() => increaseQuantity(item.id)}
                                >
                                    <View className="h-10 w-10 bg-[#F8F9FB] rounded-full flex justify-center items-center">
                                        <Text className="text-xl">+</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
                <View className=" bg-[#F8F9FB] rounded-t-3xl">
                    <View className="pt-[17px] space-y-[13px]">
                        <View className="px-[36px] flex flex-row justify-between">
                            <Text className="text-[#616A7D] text-sm font-normal">Subtotal</Text>
                            <Text className="text-[#1E222B]
                        font-medium text-sm
                        ">₹{totalPrice}</Text>
                        </View>
                        <View className="px-[36px] flex flex-row justify-between">
                            <Text className="text-[#616A7D] text-sm font-normal">Delivery</Text>
                            <Text className="text-[#1E222B]
                        font-medium text-sm
                        ">₹{deliveryCharges}</Text>
                        </View>
                        <View className="px-[36px] flex flex-row justify-between">
                            <Text className="text-[#616A7D] text-sm font-normal">Total</Text>
                            <Text className="text-[#1E222B]
                        font-bold text-sm
                        ">₹{deliveryCharges + totalPrice}</Text>
                        </View>
                    </View>
                    <View className="flex flex-row justify-center items-center py-[19px] bg-[#2A4BA0] rounded-2xl mx-6 mt-10">
                        <Text className="text-sm font-semibold text-white">Proceed  To checkout</Text>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}
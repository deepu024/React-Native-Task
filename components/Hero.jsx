import { Image, Text, TouchableOpacity, View } from "react-native";
import bagIcon from "../assets/bag.png";
import useCartStore from "../store/useCartStore"

export default function Hero({ navigation }) {
    const { cartItems } = useCartStore();

    return (
        <View>
            <View className="mt-4 w-full flex flex-row justify-between">
                <View>
                    <Text className="text-[22px] text-[#F8F9FB] font-bold">Hey, Rahul</Text>
                </View>
                <View className="relative">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Cart')}
                    >

                        <Image
                            source={bagIcon}
                            alt=""
                            width={24}
                            height={24}
                        />
                        {
                            cartItems.length > 0 && <View className="absolute -top-4 -right-4 bg-[#F9B023] w-7 h-7 flex flex-row rounded-full border-[#2A4BA0] border-4 justify-center items-center">
                                <Text className="text-sm text-white">{cartItems.length}</Text>
                            </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

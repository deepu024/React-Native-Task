import { FlatList, Image, ScrollView, Text, View } from "react-native";
import imagePlaceHolder from '../assets/image-placeholder.png'

export default function Coupons() {
    return (
        <View className="flex my-[27px]">
            <ScrollView horizontal contentContainerStyle="" className="flex" >
                <Coupon />
                <Coupon />
                <Coupon />
                <Coupon />
            </ScrollView>
        </View>
    )
}


function Coupon() {
    return (
        <View className="bg-white mx-5">
            <View className="h-[123px] w-[269px] bg-[#F9B023] rounded-2xl px-[21px] flex flex-row items-center justify-between">
                <View>
                    <Image
                        source={imagePlaceHolder}
                        alt="Image"
                    />
                </View>
                <View className="w-fit">
                    <Text className="text-[20px] font-[300] text-white">Get</Text>
                    <Text className="text-[26px] text-white font-extrabold">50%  OFF</Text>
                    <Text className="text-[13px] font-medium text-white">On first 03 order</Text>
                </View>
            </View>
        </View>
    );
}
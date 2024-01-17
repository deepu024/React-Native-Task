import { TextInput, View, Image, Text } from "react-native";
import search from '../assets/search.png';
import downArrow from '../assets/down-arrow.png';
import { useState } from "react";

export default function Search() {
    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <View className="mt-[35px] flex flex-row space-x-3 bg-[#153075] rounded-full px-[28px] items-center" >
                <Image
                    source={search}
                    className="h-[18px] w-[18px] my-[19px]"
                />
                <TextInput
                    placeholderTextColor="#8891a5"
                    placeholder="Search Products or store" onChangeText={newText => setSearchValue(newText)} defaultValue={searchValue} className="text-sm text-[#8891a5] font-medium " />
            </View>
            <Details />
        </>
    )
}

export function Details() {
    return (
        <View className="flex flex-row justify-between mt-[29px] mb-[12px]">
            <View className="flex flex-col space-y-[2px]">
                <Text className="text-[#f8f9fbab] font-[800] text-[11px]">Delivery to</Text>
                <View className="flex flex-row items-center space-x-[10px]">
                    <Text className='text-sm text-[#F8F9FB] font-[500]'>Green Way 3000, Sylhet</Text>
                    <Image
                        source={downArrow}
                    />
                </View>
            </View>
            <View className="flex flex-col">
                <Text className="text-[#f8f9fbab] font-[800] text-[11px]">Within</Text>
                <View className="flex flex-row items-center space-x-[10px]">
                    <Text className='text-sm text-[#F8F9FB] font-[500]'>1 Hour</Text>
                    <Image
                        source={downArrow}
                    />
                </View>
            </View>
        </View>
    )
}
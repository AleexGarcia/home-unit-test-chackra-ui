import { Box, Text } from "@chakra-ui/react";
interface ICardInfo{
    mainContent: string,
    content: string
}
export default function CardInfo({mainContent, content}:ICardInfo){
    return(
        <Box backgroundColor='white' minHeight={120} p={8} borderRadius={25}>
            <Text fontSize='xl' fontWeight='bold'>{mainContent}</Text>
            <Text fontSize='xl'>{content}</Text>
        </Box>
    );
}
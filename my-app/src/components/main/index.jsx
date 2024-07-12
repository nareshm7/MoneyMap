import { Button, Flex, Heading } from "@chakra-ui/react";
import Summary from "../summary";

export default function Main(){
     return <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
          <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'} >
               <Heading color={'red.400'} display={["name", "block", "block", "block", "block"]}>
                    MoneyMap
               </Heading>
               <Flex alignItems={"center"}>
                    <Button bg={"red.300"} color={"black"} ml={"4"}>
                         Add New Transaction
                    </Button>
               </Flex>
          </Flex>
           <Summary />
          <Flex w={'full'} alignItems={'flex-start'} justifyContent={'space-evenly'} flexDirection={['column', 'column', 'column', 'row']}>  
               <ExpenseView />
               <ExpenseView />         
          </Flex>
     </Flex>
}


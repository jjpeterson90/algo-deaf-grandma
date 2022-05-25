from operator import truediv


def deaf_grandma():
    import random

    def is_upper_case(input):
        for i in range(len(input)):
            if input[i] == input[i].lower():
                return False
        return True

    goodbye_counter = 0
    reply = input("HEY, KID!")

    while goodbye_counter < 2:
        if reply == "GOODBYE!":
            if goodbye_counter == 1:
                input("LATER, SKATER!")
                goodbye_counter += 1
            else:
                reply = input("LEAVING SO SOON?")
                goodbye_counter += 1
        elif reply == "":
            reply = input("WHAT?!")
        elif is_upper_case(reply):
            reply = input(f'NO, NOT SINCE {random.randrange(1935,1955)}')
        else:
            reply = input("SPEAK UP, KID!")


deaf_grandma()
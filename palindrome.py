def check_palindrome(word):
    if word == word[::-1]:  # Check if the word is a palindrome
        return True, word
    else:
        return False, word[::-1]

input = input("Enter a word: ")
is_palindrome, result = check_palindrome(input)

if is_palindrome:
    print(f"{input} is a palindrome.")
else:
    print(f"{input} is not a palindrome. Reversed: {result}")

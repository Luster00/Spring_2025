// Задана строка, содержащая буквы и цифры.
// Какова максимальная длина последовательности из цифр, идущих подряд.

using lb1_Shilov_v12;

class Program
{
    public static void Main()
    {
        Console.WriteLine("Введите строку с буквами и цифрами:");
        string str = Console.ReadLine(); // Ввод строки пользователем

        Counter counter = new Counter(); // Подключаемся к классу
        int result = counter.FindMaxDigitSequence(str); // Вводим переменную и присваиваем ей результат метода

        Console.WriteLine($"Максимальная длина последовательности цифр: {result}"); // Вывод результата
        Console.ReadLine();
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace lb1_Shilov_v12
{
    public class Counter
    {
        public int FindMaxDigitSequence(string input) // Метод, который будет искать цифры в строке и выводить их количество
        {
            // Переменные для выполнения роли счетчика:
            int currentLength = 0;
            int maxLength = 0;

            foreach (char c in input) // Создание цикла для перебора и поиска цифр в строке
            {
                if (char.IsDigit(c))
                {
                    currentLength++; // Увеличение счетчика на +1 в случае если символ цифра
                    maxLength = Math.Max(maxLength, currentLength);
                }
                else
                {
                    currentLength = 0; // Сброс счетчика в случае, если не цифра
                }
            }

            return maxLength; // Вывод результата
        }
    }
}

